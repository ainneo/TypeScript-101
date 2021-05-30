//loads grunt
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-ts");
  //grunt will only run one task for us, so type ts
  grunt.initConfig({
    //ts will be a package of configurations
    ts: {
      main: {
        //array of ts files that turn files into js files
        // * means to run all files
        src: ["typescript/*.ts"],
        //dest is a folder that houses the js files
        dest: "javascript/",
      },
    },
  });
  //you have to registar a grunt task to get the file to run
  // default is specail string that runs grunt, and ts which is the definition for ts prop
  grunt.registerTask("default", ["ts"]);
};

//***RUN GRUNT in terminal, that creates the javascript/
