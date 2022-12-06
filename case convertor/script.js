const TitleCase = (string) => {
    var result = [];
    var a = string.toLowerCase().split(" ");
    a = a.filter(item => item);
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i][0].toUpperCase() + a[i].substr(1);
        result.push(a[i]);
    }
    return result.join(" ");
};

const SentenceCase = (string) => {
    var result = [];
    let words = string.toLowerCase().split(" ");
    let newsentence = true;

    for (let i = 0; i < words.length; i++) {
        if (newsentence == true || words[i] == "i") {
            words[i] = words[i][0].toUpperCase() +
                words[i].substr(1);
            newsentence = false;
        }

        if (words[i][words[i].length - 1] === "," ||
            words[i][words[i].length - 1] === "?" ||
            words[i][words[i].length - 1] === "!") {
            newsentence = true;
        }
    }
    return words.join(" ");
};
var UserInput = document.getElementById("text");

document.getElementById("lower").addEventListener("click", function () {
    UserInput.value = UserInput.value.toLowerCase();
});
document.getElementById("upper").addEventListener("click", function () {
    UserInput.value = UserInput.value.toUpperCase();
});
document.getElementById("sentence").addEventListener("click", function () {
    UserInput.value = SentenceCase(UserInput.value);
});
document.getElementById("title").addEventListener("click", function () {
    UserInput.value = TitleCase(UserInput.value);
});
