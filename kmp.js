function search(source, pattern) {
    //outer is a label
    outer: for(let i = 0; i < source.length; i++) {
        for(let j = 0; j < pattern.length; j++) {
            if(source[i + j] !== pattern[j]) {
                continue outer;
            }
        }
        return i;
    }
    return -1;
}

function search2(source, pattern) {
    //outer is a label

    let j = 0;
    for(let i = 0; i < source.length; i++) {
        //console.log("i:", i, source[i], "j:", j, pattern[j]);
        if(source[i] === pattern[j]) {
            j++;
            if(j === pattern.length) {
                return i - j + 1;
            }
        } else if(j !== 0) {
            j = 0;
            i --;
        }
    }
    return -1;
}


function search3(source, pattern) {
    //outer is a label

    const next = [0, 0, 0, 1, 2, 0];

    let j = 0;
    for(let i = 0; i < source.length; i++) {
        //console.log("i:", i, source[i], "j:", j, pattern[j]);
        if(source[i] === pattern[j]) {
            j++;
            if(j === pattern.length) {
                return i - j + 1;
            }
        } else if(j !== 0) {
            j = next[j];
            i --;
        }
    }
    return -1;
}

//i: aabaabaaab
//j:    aabaabaaab
//      ^
//n:0010
function generateNext(pattern) {
    let next = [0, 0];
    let i = 1, j = 0;
    while(i < pattern.length) {
        if(pattern[i] === pattern[j]) {
            next[++i] = ++j;
        } else if(j === 0) { 
            next[++i] = 0;
        } else {
            j = next[j];
        }
    }
    return next;
}

function generateNext2(pattern) {
    let next = [0, 0];
    let j = 0;

    for(let i = 1; i < pattern.length; ) {
        if(pattern[i] === pattern[j]) {
            next[++i] = ++j;

        } else if(j === 0){
            next[++i] = 0;
        } else {
            j = next[j];
            //i--;
        }
    }
    
    return next;
}


console.log(generateNext2("aabaabaaab"));


function search4(source, pattern) {
    //outer is a label
    let next = [0, 0];
    let i = 1, j = 0;
    while(i < pattern.length) {
        if(pattern[i] === pattern[j]) {
            next[++i] = ++j;
        } else if(j === 0) { 
            next[++i] = 0;
        } else {
            j = next[j];
        }
    }
    i = 0, j = 0;
    while(i < source.length) {
        if(source[i] === pattern[j]) {
            j++;
            i++;
            if(j === pattern.length) {
                return i - j;
            }
        } else if(j !== 0) {
            j = next[j];
        } else {
            i++;
        }
    }
    return -1;
};

//search3("abababxabcababcababc", "ababc"));
/*
    ababc
abababcaabababc
    ^

j:  ababc
i:ababc
      ^
n:00012
*/