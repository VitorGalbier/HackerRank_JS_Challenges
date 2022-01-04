//             5*"" + 1*"#"
// console.log("     #")
// console.log("    ##")
// console.log("   ###")
// console.log("  ####")
// console.log(" #####")
// console.log("######")
function staircase(n) {
    let espaco = n - 1
    for (let i = 1; i <= n; i++){
        console.log((" ".repeat(espaco)) + ("#".repeat(i)))
        espaco -= 1
    }
}
staircase(8)