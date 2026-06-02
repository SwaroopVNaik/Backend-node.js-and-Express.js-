const fs = require('fs');

// File System Operations : 

// Write File 

// syntax => fs.writeFile(flename, data[,options], callback ).
// options => optional.

fs.writeFile("Swaroop.txt", "Hey hello ! How are You !",  function(err){
    if(err) console.log("error");
    else console.log("Done");
})

// Append File

fs.appendFile("Swaroop.txt", " I Am Good", function(err){
    if(err) console.log("error");
    else console.log("Done");
} )

// Rename

// syntax => fs.rename(oldPath, newPath, callback)

fs.rename("Swaroop.txt", "SwaroopVNaik.txt", function(err){
    if(err) console.log("error");
    else console.log("Done");
} )

// Copy

// syntax => fs.copyFile(src, dest[,model], callback)
// model => optional

fs.copyFile("SwaroopVNaik.txt", "./copy/copy.txt", function(err){
    if(err) console.log("err");
    else console.log("done");
} )

// Unlink 

// syntax => fs.unlink(path, callback)

fs.unlink("SwaroopVNaik.txt", function(err){
    if(err) console.log(err);
    else console.log("Removed");
    
    
})

// rmdir => remove directory use when folder empty
// rm => use when folder has few files present in it ! 
// syntax => fs.rmdir(path[,options], callback)
// options => optional

fs.rm("./copy", {recursive : true}, function(err){
    if(err) console.log(err);
    else console.log("removed");    
})

// Read File
// Syntax => fs.readFile("data", unicode, callback )
// utf - 8 => unicode transformation format - 8

fs.readFile("Swaroop.txt", "utf-8", function(err, data){
    if(err){
        console.log(err);
        return
    }
    console.log(data);
})

// Read Folder (Read Directory) 
// syntax => fs.readdir("path", callback);

fs.readdir("./", (err, files) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(files);
})

// creating folder using fs 
// mkdir => make Directory

fs.mkdir("Myfolder", (err) => {
    if(err) throw err
    console.log("Folder Created");
})