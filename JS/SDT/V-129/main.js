/*
    Array Methods
    - Array.copWithin(Target, Start => Optional, End => Optional)
    "Copy Part Of An Array To Another Location in The Same Array"
    -- Any Negative Value Will Count From The End
    -- Target
    ---- Index To Copy Part TO
    ---- If At Or Greater Than Array Length Nothing Will Be Copied
    -- Start
    ---- index To Start Copying From
    ---- If Ommited = Start From Index 0
    -- End
    ---- Index To End Copying From
    ---- Not Including End
    ---- If Ommited = Reach The End
*/

let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3);

// myArray.copyWithin(4, 6);
// myArray.copyWithin(4, -1);

// myArray.copyWithin(1, -2);
myArray.copyWithin(1, -2, -1);



console.log(myArray);
