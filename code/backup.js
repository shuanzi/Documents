function findDesktopFile(callback, sFileName) {
  if (typeof callback !== 'function')
    throw 'Bad type for callback';
  var systemType = os.type();
  if (systemType === "Linux") {
    var xdgDataDir = [];
    var exec = require('child_process').exec;
    exec('echo $XDG_DATA_DIRS', function(err, stdout, stderr) {
      if (err) {
        console.log(stderr)
        console.log(err);
        return;
      } else {
        xdgDataDir = stdout.substr(0, stdout.length - 1).split(':');
        for (var i = 0; i < xdgDataDir.length; ++i) {
          xdgDataDir[i] = xdgDataDir[i].replace(/[\/]$/, '');
        }

        function tryInThisPath(callback, index) {
          if (index == xdgDataDir.length) {
            callback('Not found');
            return;
          }
          var sCommand = 'sudo find ' + xdgDataDir[index] + ' -name ' + sFileName;
          exec(sCommand, function(err, stdout, stderr) {
            if (err) {
              console.log(stderr);
              console.log(err);
              return;
            }
            if (stdout == '') {
              tryInThisPath(callback, index + 1);
            } else {
              var result = stdout.split('\n');
              callback(result[0]);
            }
          })
        };
        tryInThisPath(callback, 0);
      }
    })
  } else {
    console.log("Not a linux system! Not supported now!")
  }
}
