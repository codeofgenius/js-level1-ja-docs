---
layout: pages
title: 4章_変数を利用しよう_変数名の規則 / ステップ1 / JavaScriptレベル1
description: 04章_変数を利用しよう / ステップ1 / JavaScriptレベル1
---

## 4章　変数を利用しよう　変数名の規則

<div class="em2-outline">
変数名のつけ方の規則、予約語について紹介します
</div>

### 変数名の規則

変数を宣言するときには「変数名」を決める必要があります。変数名を付けるときにはいくつかのルールがあります

##### 変数名のルール

*   1文字目は、英字、アンダースコア（\_）、ドル($)が利用可能
*   2文字目以降は、英字、数値（0－9）、アンダースコア（\_）、ドル($)が利用可能

上記のルールに加えて、英字の大文字と小文字は異なる変数名として解釈されます。また、「予約語」といわれる、単語は変数名に利用できません

##### 予約語

以下の言葉は変数として利用することができません

break  case  catch  continue  debugger
default  delete  do  else  finally
for  function  if  in  instanceof
new  return  switch  this  throw
try  typeof  var  void  while
with  null  true  false

加えて、以下の言葉も利用できません。将来の利用される可能性のある予約語

class  enum  export  extends  import
super  implements  interface  let  package
private  protected  public  static  yield
const  export  import

以上のルールを守って変数名をつけることができます

##### 変数名の例

変数名の付け方を紹介します

###### OKパターン

```javascript:
var name; // 英字
var address; // 英字
var _age; // アンダースコアで始まっている
var $color; // ドルで始まっている
var person2; // 数字は2文字目以降は利用可能
```

###### NGパターン
```javascript:
var 1name; // 数字が1文字目で利用されている
var &name; // 1文字目に利用できない記号がある
var for; // 予約語は変数名に使えない
var if; // 予約語は変数名に使えない
```



