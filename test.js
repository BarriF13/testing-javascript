var TEST = {
    areEqual: function(a,b, message){
      var result = (a === b );
      console.log(result ? "PASS: " : "FAIL: " )+ message;
      return result;
    },
    areNotEqual: function(a,b, message){
      var result = (a !== b );
      console.log(result ? "PASS: " : "FAIL: " )+ message;
      return result;
    }
    _output: function (result, message){
      console[result ? "log" : "warn"] (result ? "PASS: " : "FAIL: ") + message;
    }
};