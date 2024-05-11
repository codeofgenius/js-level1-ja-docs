---
layout: pages
title: 09章_ゲーム作成 / ステップ3_パドル作成 / JavaScriptレベル1
description: 09章_ゲーム作成 / ステップ3_パドル作成 / JavaScriptレベル1
---


9章 ゲーム作成 ステップ3 パドル作成

ボールを打ち返すための「パドル」を作成します

### パドル作成

ボールの下側に打ち返すための「パドル」を作成します

#### プログラムの作成

「main.js」にはすでにたくさんのプログラムが作成されています。適切な場所を探して、プログラムを作りましょう

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

    // ブロック作成

    // ライフのテキスト表示

};

##### 「mainScene.createPaddle」の作成

プログラムを作成します。赤色の部分を追加します

/js-level1/chapter09/main.js

mainScene.createPaddle = function() {

     // パドル作成

    this.paddle = this.physics.add.image(400, 550, 'paddle1');

    this.paddle.setDisplaySize(104,24);

    this.paddle.setImmovable();

    this.paddle.isStart = true;

    this.physics.add.collider(this.paddle, this.ball, this.hitPaddle, null, this);    

};

* * *

###### 実行結果

作成したプログラムを実行します。ゲームを再読み込みします。ボールの下側に「パドル」が表示されると正しくできています

![](https://lh7-us.googleusercontent.com/tuQsU3rtzgp3xMpvEYrShWox6jWfNNO_vTlnQ3Qd2MKLe539PcolXrEmA63LKpW2_Ms2gvjHJBFNwVk0eooxsNKokZggkp_Ua80WWI1aSh-9HqYemJRziPU_ZPXcq8gq55S-BPxweug-Eno)

* * *

#### 処理解説

ボールを打ち返すためのパドルを作成しました

##### 初期化処理

ゲームの初期化処理で、パドルを作成する処理を呼び出しました

    // パドル作成

    this.createPaddle();    

##### パドル作成処理

パドル作成処理を実行しました。以下の部分でパドルを作成します。現時点では、パドルは動きません

mainScene.createPaddle = function() {

     // パドル作成

    this.paddle = this.physics.add.image(400, 550, 'paddle1');

    this.paddle.setDisplaySize(104,24);

    this.paddle.setImmovable();

    this.paddle.isStart = true;

    this.physics.add.collider(this.paddle, this.ball, this.hitPaddle, null, this);    

};

* * *

### パドルの移動

つぎにパドルを左右に移動させる処理を作成します

#### プログラムの作成

「main.js」にはすでにたくさんのプログラムが作成されています。適切な場所を探して、プログラムを作りましょう

##### 「mainScene.update」の作成

プログラムを作成します。赤色の部分を追加します

/js-level1/chapter09/main.js

mainScene.update = function() {

    // ボールがシーンの最下部に到達した

    // キーボードのカーソルオブジェクトを取得

    var cursors = this.input.keyboard.createCursorKeys();

    var x = 0;

    // 右カーソルをクリックすると

    if(cursors.right.isDown) {

        x = this.paddle.x + this.paddleSpeed;

        this.paddle.x = Phaser.Math.Clamp(x, 52, 748);

    }

    // 左カーソルをクリックすると

    if(cursors.left.isDown) {

        x = this.paddle.x - this.paddleSpeed;

        this.paddle.x = Phaser.Math.Clamp(x, 52, 748);

    }

    // パドルの上にボールが乗っているなら

    if(this.paddle.isStart) {

        this.ball.setPosition(this.paddle.x, 500);

    }

};

###### 実行結果

作成したプログラムを実行します。ゲームを再読み込みします。「右カーソルキー」をクリックするとパドルは右方向に移動します。「左カーソルキー」をクリックすると、パドルは左方向に移動します

![](https://lh7-us.googleusercontent.com/yZMkwjhRHgBBeRFI_MQzzm4Ob-y8AXAZgs2kC5aYtsiT6stEMB_p-8vTSbmxuwRSWJOKcHMSzmtfVGmOYdHBMhYOvvpDnlT7YpT4pDDMmHEj69YQMguAdLLd85tnJjAYZPa7mauhUgLx2K0)

* * *

#### 処理解説

左右のカーソルキーで、パドルが左右に移動します

##### ゲームの更新処理部分

「mainScene.update」の部分は、ゲームを実行しているときに繰り返し実行されている処理です。ここにカーソルキーでパドルを動かす処理を作成します

mainScene.update = function() {

};

##### 右方向への移動

右カーソルキーをクリックすると、右方向へ移動します

    // 右カーソルをクリックすると

    if(cursors.right.isDown) {

        x = this.paddle.x + this.paddleSpeed;

        this.paddle.x = Phaser.Math.Clamp(x, 52, 748);

    }

##### 左方向への移動

左カーソルキーをクリックすると、左方向へ移動します

    // 左カーソルをクリックすると

    if(cursors.left.isDown) {

        x = this.paddle.x - this.paddleSpeed;

        this.paddle.x = Phaser.Math.Clamp(x, 52, 748);

    }

##### ボールも同時に移動

ボールを発射していない状態の場合、パドルの移動に合わせて、ボールも移動します

    // パドルの上にボールが乗っているなら

    if(this.paddle.isStart) {

        this.ball.setPosition(this.paddle.x, 500);

    }

ー  －

All Rights Reserved By Code of Genius


