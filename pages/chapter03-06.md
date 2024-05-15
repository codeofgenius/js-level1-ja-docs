---
layout: pages
title: 3章 計算しよう ワーク6 練習問題 かけ算 / 計算しよう / JavaScriptレベル1
description: 3章 計算しよう ワーク6 練習問題 かけ算 / 計算しよう / JavaScriptレベル1
---

## 3章 計算しよう ワーク6 練習問題 かけ算

<div class="em2-outline">
練習問題です
</div>

### ワーク6 練習問題 かけ算
最後に、「かけ算」を行うプログラムを自分で作成してみましょう。まずは完成後の実行結果を確認します

###### 実行結果
画面を開いた状態
![](https://lh7-us.googleusercontent.com/inA_DpBQNIk1qkNcDWVcwo6L__5KZXQL9ou9e2O4DyI6SWnaEVfGl0PAt27JN-fJwrZN5eQ_j8MNaialyCFtgEnOTYeeCU5tCmD-3p3c6F9woTaDFyjof34MtW3D4KRGEF6SwSHGV3xkF-4)

数字を入力して「=」ボタンをクリックします
![](https://lh7-us.googleusercontent.com/Kg_FiXXbq7bjnFnge51ZrOeMwpUtiQX8vSY_af69sfKu2H0jW-tfBAs8cpDAgsqO4L7V-iZeREsQlfigFoLAiSkpTLGOg28-C02rCEyE31oAEVmQAmhe9KximzVbRjAHqgI4600sFCEs0xQ)

「=」をクリックすると、かけ算の答えが右側のボックスに表示されます
![](https://lh7-us.googleusercontent.com/HbhXUhQ_JuoXyDT3K9inHZjR7E0XL28iHcPy-g7Ui2r31NeVMHaAyiCWq077H1TiP99MtCo_y6MgMFXW2U5EnaBYxeEJHbTSspzKPCp0ICIoVH7XUh4OEJhSoVZq08VJ2k-n_jQwvsSb00c)

##### プログラムの作成
基本的な部分は提供されています。「ここにプログラムを作成します」よりも下の部分にプログラムを作成します。「ワーク5」で作成した「たし算」のプログラムを参考にしながら進めていきましょう

<div class="em1">
「ワーク5」に作成した処理は「たし算」でした。ここで作成する処理は「かけ算」です。基本的な処理の流れは同じです。たし算では「＋」記号で計算しました。かけ算にするためには、「一文字」だけ記号を変更する必要があります
</div>

```javascript:/js-level1/chapter03/work06.html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>ワーク6</title>
</head>
<body>
<h1>かけ算</h1>
<input type="text" id="number1">
×
<input type="text" id="number2">
<button id="btn">=</button>
<input type="text" id="answer">
<script>
var btn = document.getElementById("btn");
btn.onclick = function() {
    // ここにプログラムを作成します



}
</script>
</body>
</html>
```

#### 作成するためのポイント

「ワーク5」で作成したのは、

<div class="em2">
ボタンがクリックされると「number1」と「number2」の「たし算」の答えを「answer」代入する
</div>

でした。今回作成するのはほとんど同じです

<div class="em2">
ボタンがクリックされると「number1」と「number2」の「かけ算」の答えを「answer」代入する
</div>

です。ボタンがクリックされたときの処理手順は以下のようになります

1. 「number1」のタグに入力された値を取り出す
2. 「number2」のタグに入力された値を取り出す
3. 「number1」の値と「number2」の値をかけ算した「答え」を計算する
4. 「answer」のタグに「答え」を代入する

<div class="em1">
「ワーク5」で作成した処理を参考にしながら、「たし算」を「かけ算」に変更するだけで完成します
</div>



