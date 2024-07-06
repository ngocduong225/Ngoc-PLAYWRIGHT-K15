// if (get_first_num() != 0 && get_second_num() != 0){
//     console.log(`All number are not zero`);
// }

// function get_first_num(){
//     console.log(`Calling 1st method...`);
//     return 0;
// }

// function get_second_num(){
//     console.log(`Calling 2nd method...`);
//     return 2;
// }
//----------------------------
if (get_first_num() != 0 || get_second_num() != 0){
    console.log(`We have at least one not-zero number`);
}

function get_first_num(){
    console.log(`Calling 1st method...`);
    return 1;
}

function get_second_num(){
    console.log(`Calling 2nd method...`);
    return 2;
}

//-------------------
// && vế 1 đún thì mới thực thi tiếp vế 2, ngược lại vế 1 sai thì stop
//---
// & thực thi cả 2 vế, bắt chấp đún sai, dùng khi mún thực thi cả 2 vế
// -> kh recommend -> Bitwise operator