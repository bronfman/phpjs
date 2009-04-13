function runkit_function_redefine (funcname, arglist, code) {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brettz9.blogspot.com)
	// %          note 1: Function can only be added to the global context; use create_function() for an anonymous function
    // *     example 1: function add (a, b, c) {return a+b+c;}
    // *     example 1: runkit_function_redefine('add', 'a, b', "return (a + b);");
    // *     returns 1: true

    if (window[funcname] === undefined) { // Requires existing function?
        return false;
    }

    try {
        window[funcname] = Function.apply(null, arglist.split(',').concat(code));
        return true;
    }
    catch (e) {
        return false;
    }
}