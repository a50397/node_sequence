module.exports = function(functions) {

    var results = [];

    if (!functions) {
        return results;
    }

    function error(error){
    }

    function final(results) {
        console.log(results)
        return results;
    }

    function callback (err, result) {
        if (err){
            if (typeof(err)  === 'object'){
                err = JSON.stringify(err);
            }
            console.log('error in function number ' + (results.length+1) + " with error " + err);
            return err;
        }
        results.push(result);
        run(functions.shift());
    }

    function run (fn){
        if (fn){
            fn(results, callback);
        } else {
            final(results);
        }
    }

    run(functions.shift());

}
