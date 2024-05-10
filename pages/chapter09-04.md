---
layout: default
title: 09章_ゲーム作成 / ステップ4_ボール発射 / JavaScriptレベル1
description: 09章_ゲーム作成 / ステップ4_ボール発射 / JavaScriptレベル1
---


9章 ゲーム作成 ステップ4 ボール発射

ボールを発射します。また、パドルでボールを打ち返すことができます

### ボールの発射

スペースキーをクリックすると、パドルのボールを上方向に向かって、発射する処理を作成します

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

    // ライフのテキスト表示

};

###### 実行結果

ゲームを実行します。スペースキーをクリックすると、ボールを上方向に向かって発射します。その後、ボールは上下に移動します。パドルはボールを打ち返すことができます

![](https://lh7-us.googleusercontent.com/bc03BvOY-VvvMzBNjb99ee1wSjIJPvUfxCbljqNZbmr_Fw_d-P_PdkbRkx5NDvoR_DwTdzSPAxh4CQT4CQnXQANS_WrWpkefvJj048NShK78_CMbAS0N2JhGg1glCuaY2inXcqLf_62IfSQ)

* * *

#### 処理解説

スペースキーをクリックすると、ボールを発射する処理を作成しました

##### スペースキーをクリック

スペースキーをクリックしたときの処理は以下のようにして作成します

    this.input.keyboard.on('keydown-SPACE', function(event) {

        // スペースキーをクリックしたときの処理

    }, this);

##### ボールを上方向に発射

ボールを発射します

    this.input.keyboard.on('keydown-SPACE', function(event) {

        // ゲーム開始状態ならば

        if (this.paddle.isStart) {

            // ボール発射

            this.ball.setVelocity(this.ballSpeedX, this.ballSpeedY);

            this.paddle.isStart = false;

        }

    }, this);

* * *

### パドルとボールが衝突したときの処理

ボールを発射することができました。つぎは、ボールとパドルが衝突したときの処理を作成します。衝突すると、ボールとパドルの位置に応じて、ボールに角度をつけて、打ち返ようにします

##### 「mainScene.hitPaddle」の作成

プログラムを作成します。赤色の部分を追加します

/js-level1/chapter09/main.js

mainScene.hitPaddle = function (paddle, ball) {

    // ボールにX方向の角度を設定

    var diff = 0;

    if (ball.x < paddle.x) {

        // ボールがパドルの左側に衝突

        diff = paddle.x - ball.x;

        ball.setVelocityX(-10 \* diff);

    } else if (ball.x > paddle.x) {

        // ボールがパドルの右側に衝突

        diff = ball.x -paddle.x;

        ball.setVelocityX(10 \* diff);

    } else {

        // X方向の加速度はなし

        ball.setVelocityX(0);

    }    

};

* * *

###### 実行結果

ボールとパドルの位置に応じて、ボールに角度をつけて打ち返します

![](https://lh7-us.googleusercontent.com/9hWbTGdbnkP1Rd0fn2NtSfglbZ7-wgu7urM2720grUrgQ4aKTwgn3vZWsUMVox9NBjIOZF6eGgW7jl-lgB2U3Dd1SAbhHeyxw-nq7pXnsxc9uPZ2piiykQhHHDg2NCT69ry_WRp6zeIGrMg)

* * *

#### 処理解説

ボールとパドルが衝突したときの処理を作成しました。ボールに角度をつけます

##### ボールとパドルが衝突したとき

ボールとパドルが衝突したときの処理を、以下の部分に作成します

mainScene.hitPaddle = function (paddle, ball) {

    // 衝突したときの処理

};

##### パドルの左側に衝突した

ボールがパドルの左側に衝突した場合、ボールは左方向に角度をつけて打ち返します

    if (ball.x < paddle.x) {

        // ボールがパドルの左側に衝突

        diff = paddle.x - ball.x;

        ball.setVelocityX(-10 \* diff);

    } else if (ball.x > paddle.x) {

##### パドルの右側に衝突した

ボールがパドルの右側に衝突した場合、ボールは右方向に角度をつけて打ち返します

    } else if (ball.x > paddle.x) {

        // ボールがパドルの右側に衝突

        diff = ball.x -paddle.x;

        ball.setVelocityX(10 \* diff);

    } else {

##### 中央に衝突した

ボールがパドルの中央に衝突した場合、ボールは「真上」に打ち返します。なかなか、再現するのは難しいですが…。

    } else {

        // X方向の加速度はなし

        ball.setVelocityX(0);

    }    

ー  －

All Rights Reserved By Code of Genius


