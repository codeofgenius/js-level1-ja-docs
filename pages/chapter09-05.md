---
layout: default
title: 09章_ゲーム作成 / ステップ5_ブロック作成 / JavaScriptレベル1
description: 09章_ゲーム作成 / ステップ5_ブロック作成 / JavaScriptレベル1
---


9章 ゲーム作成 ステップ5 ブロック作成

「ブロック崩し」ゲームのもっとも重要な部分である、ブロックを作成します

### ブロック作成

画面上部にブロックを作成します

##### 「mainScene.create」の作成

プログラムを作成します。赤色の部分を追加します

/js-level1/chapter09/main.js

mainScene.create = function() {

    // 初期設定を実行する

    this.config();

    // ボール作成

    this.createBall();

    // パドル作成

    this.createPaddle();    

    // スペースキーのクリックでボール発射

    this.input.keyboard.on('keydown-SPACE', function(event) {

        // ゲーム開始状態ならば

        if (this.paddle.isStart) {

            // ボール発射

            this.ball.setVelocity(this.ballSpeedX, this.ballSpeedY);

            this.paddle.isStart = false;

        }

    }, this);

    // ブロック作成

    this.createBlocks();

    // ライフのテキスト表示

};

##### 「mainScene.createBlocks」の作成

プログラムを作成します。赤色の部分を追加します

/js-level1/chapter09/main.js

mainScene.createBlocks = function() {

    // 横10列、縦6行並べる

    // ブロックの色の配列

    var blockColors = \[ 'red1', 'green1', 'yellow1', 'silver1', 'blue1', 'purple1' \];

    // 物理エンジン対象固定オブジェクトグループ作成

    this.blocks = this.physics.add.staticGroup();

    // 縦に6行

    for(var i = 0; i < 6; i++) {

        // 横に10列

        for( var j = 0; j < 10; j++) {

            var color = blockColors\[i\];

            var block = this.blocks.create(80 + j \* 64, 80 + i \* 32, color);

            block.setOrigin(0,0);

            block.setDisplaySize(64, 32);

            block.refreshBody();

        }

    }

    this.physics.add.collider(this.ball, this.blocks, this.hitBlock, null, this);

};

* * *

###### 実行結果

ブロックを表示します。ボールがブロックに衝突すると、ブロックが消えます。また、ブロックを全て消すとゲームクリアになります。ゲームクリアになると、スタート画面が表示されます

![](https://lh7-us.googleusercontent.com/u1YYkHEwzcY4JhA8yJdHLJWQo1m8YthHhEZVqOOu1oti2CSIg6eZwOTB_HljY7kZk2wVKlyjJPVQWVq-uSqba1-8k942eQSCtgyZ3YhApkuCKEE0SmuiIjqDYEklJWISNsjPE5uZFDi3_34)

※ブロックを全て消して、「ゲームクリア」ができるかどうかを確認してください

* * *

#### 処理解説

ブロックを作成しました

##### ブロックの作成処理の呼び出し

ゲームの初期化処理で、ブロックの作成処理を呼び出します

    // ブロック作成

    this.createBlocks();

##### ブロック作成処理の実行

ブロック作成処理を実行します。横方向に10列、縦方向に6行のブロックを作成します

mainScene.createBlocks = function() {

};

##### ブロックの色

作成するブロックの色をデータとして作成します

    // ブロックの色の配列

    var blockColors = \[ 'red1', 'green1', 'yellow1', 'silver1', 'blue1', 'purple1' \];

##### ブロックのグループ作成

ブロックを格納するためのグループを作成します

    // 物理エンジン対象固定オブジェクトグループ作成

    this.blocks = this.physics.add.staticGroup();

* * *

##### 繰り返し処理でブロック作成

繰り返し処理を利用して、ブロックを作成します。for文の内側にfor文を作成します

    // 縦に6行

    for(var i = 0; i < 6; i++) {

        // 横に10列

        for( var j = 0; j < 10; j++) {

            var color = blockColors\[i\];

            var block = this.blocks.create(80 + j \* 64, 80 + i \* 32, color);

            block.setOrigin(0,0);

            block.setDisplaySize(64, 32);

            block.refreshBody();

        }

    }

##### ボールとブロックを衝突させる

ボールとブロックが衝突します

    this.physics.add.collider(this.ball, this.blocks, this.hitBlock, null, this);

ここまでのステップで、ブロック崩しのほとんどの部分は完成です

ー  －

All Rights Reserved By Code of Genius


