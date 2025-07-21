// script.js

function calculateBmi() {
    // HTMLから身長と体重の値を取得
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    // BMIを計算 (身長をメートルに変換)
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    // 結果を表示するHTML要素を取得
    const resultElement = document.getElementById('result');
    const categoryElement = document.getElementById('category');

    // 計算結果とカテゴリを表示
    if (isNaN(bmi)) {
        resultElement.textContent = '数値を入力してください。';
        categoryElement.textContent = '';
    } else {
        resultElement.textContent = 'あなたのBMI: ' + bmi.toFixed(2); // 小数点第2位まで表示
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight (痩せ型)';
        } else if (bmi < 25) {
            category = 'Normal (普通体重)';
        } else if (bmi < 30) {
            category = 'Overweight (肥満気味)';
        } else {
            category = 'Obese (肥満)';
        }
        categoryElement.textContent = 'カテゴリ: ' + category;
    }
}