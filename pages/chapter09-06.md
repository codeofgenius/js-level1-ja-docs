---
layout: pages
title: 09章_ゲーム作成 / ステップ6_ゲームオーバー / JavaScriptレベル1
description: 09章_ゲーム作成 / ステップ6_ゲームオーバー / JavaScriptレベル1
---


9章 ゲーム作成 ステップ6 ゲームオーバー

ゲームオーバーの処理を作成します。「ライフ」として、「3」を設定します。パドルでボールを打ち返すことができなかった場合、ライフが減少します。ライフが「0」になるとゲームオーバーです

### ゲームオーバー

画面内に、「ライフ」を表示します。ライフの初期値は「3」です。パドルでボールを打ち返すことができなかった場合、ライフが減ります。ライフが「0」になると、ゲームオーバーになります

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

    this.lifeText = this.add.text(30, 20, 'ライフ：' + this.life, {

        font: '20px Open Sans',

        fill: '#ff0000'

    });

};

##### 「mainScene.update」の作成

プログラムを作成します。赤色の部分を追加します

/js-level1/chapter09/main.js

mainScene.update = function() {

    // ボールがシーンの最下部に到達した

    if (this.ball.y >= this.game.config.height - this.ball.width / 2) {

        this.failToHit();

    }

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

画面右上でにライフが表示されます。初期値は「3」です。ボールが画面下部に到達すると、ライフが減ります。再度ボールを発射する状態になります。ライフが「0」になると、スタート画面が表示されます

![](https://lh7-us.googleusercontent.com/i-U4Ya1onQv6kiyQxDli_nzOx8g7EOiCXuJy9ebwR6lZxSQ-uvyyQo4tB8pPdcQYiuKQJNTO2rMFcqGzI9zW4McTiEuhDVHoCN1A_GXI8TbonoQ1n_pm_f3Yixw1S3U4H7EPGmxfz_dOZkc)

* * *

#### 処理解説

ゲームに「ライフ」を導入しました。ライフがなくなると「ゲームオーバー」になります

##### ライフの表示

ゲームの初期化処理で、画面左上に「ライフ」を表示します。初期値は、「3」です

    // ライフのテキスト表示

    this.lifeText = this.add.text(30, 20, 'ライフ：' + this.life, {

        font: '20px Open Sans',

        fill: '#ff0000'

    });

##### ボールが画面下部に到達したら

ゲームの繰り返し処理で、ボールがシーン最下部に到達したかどうかを判定します。到達した場合、「this.failToHit」を呼び出します

    // ボールがシーンの最下部に到達した

    if (this.ball.y >= this.game.config.height - this.ball.width / 2) {

        this.failToHit();

    }

* * *

##### ボール衝突失敗処理の実行

パドルがボールを打ち返すことができなかった場合、ボールがシーンの最下部に到達します。その時には、以下の処理が実行されます。ライフを減らします。ライフが「0」になると、ゲームオーバー処理として、「this.gameOver」を呼び出します

mainScene.failToHit =  function () {

    // ボールを打ち返すことに失敗

    this.ball.setVelocity(0);

    this.paddle.isStart = true;

    // ライフを減らす

    this.life--;

    this.lifeText.text = 'ライフ：' + this.life;

    // ライフが0になると

    if(this.life <= 0) {

        // 0.5秒後にゲームオーバー

        this.time.addEvent({

            duration: 500,

            callback: this.gameOver,

            loop: false,

            callbackScope: this,

        });

    }

};

##### ゲームオーバー処理の実行

画面に「ゲームオーバー」と表示します。その後、スタート画面に遷移します。再度ゲームを実行することができます

mainScene.gameOver = function() {

    // ゲームオーバー

    alert("ゲームオーバー");

    // スタートシーンに移動

    this.scene.start("startScene");

};

* * *

これでゲームは完成です。現時点では、プログラムの処理は理解できないかもしれません。学習を続けていくことで、少しづつ理解できるようになります

ー  －

All Rights Reserved By Code of Genius


