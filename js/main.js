'use strict';
{
    // const target = document.querySelector('img');

    // function hoge(){
    //     console.log('fired!!');
    // }

    // // Intersection Observer のインスタンスを作ってあげます。
    // const observer = new IntersectionObserver(hoge);

    // // observer の observe() メソッドを使って target を監視
    // observer.observe(target);










    // const target = document.querySelector('img');

    // function callback() {
    //     console.log('fired!!');
    // }

    // const options = {
    //     threshold: [0.2, 0.8],
    // };
    // const observer = new IntersectionObserver(callback, options);

    // observer.observe(target);











    // const target = document.querySelector('img');

    // function callback(entries) {
    //     console.log(entries[0]);
    // }

    // const options = {
    //     threshold: 0.2,
    // };
    // const observer = new IntersectionObserver(callback, options);

    // observer.observe(target);








// 8
    // const target = document.querySelector('img');

    // function callback(entries) {
    //     console.log(entries[0]);

    // // 交差が始まったときに appear クラスを付ければいいので、 isIntersecting を調べてあげて、それが true だったら appear クラスを付けてあげればいいでしょう。それからisIntersecting が false のときは appear クラスを外してあげましょう。classList.remove を使ってあげれば OK.
    // // if (entries[0].isIntersecting){
    // //     entries[0].target.classList.add('appear');
    // // }else{
    // //     entries[0].target.classList.remove('appear');
    // // }
    // リファクタリング↓

    // // 交差が終わるときはアニメーションしてほしくない場合もありますね。
    // // entries[0] の isIntersecting が false だったら(!のこと)、それ以降の処理はしないでね、という意味で return としてあげましょう。
    // if (!entries[0].isIntersecting){
    //     return;
    // }
    // // そのうえで、 false でなかった場合は appear クラスを付けたいので、このように書いてあげれば OK です。
    // entries[0].target.classList.add('appear');
    // }

    // const options = {
    //     threshold: 0.2,
    // };

    // const observer = new IntersectionObserver(callback, options);

    // observer.observe(target);














    // const target = document.querySelector('img');

    // function callback(entries) {
    //     console.log(entries[0]);

    //     if (!entries[0].isIntersecting){
    //       return;
    //         }

    // entries[0].target.classList.add('appear');
    // }

    // const options = {
    //     threshold: 1,
    //     rootMargin: '0px 0px -100px',
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(target);












    // // 交差するたびに callback が実行されて、ブラウザに負荷がかかってしまいます。

    // const target = document.querySelector('img');

    // // こちらの第二引数に、この関数を実行している observer を渡すことができます。わかりやすいように定数名を変えて、 observer の obs としましょう。
    // function callback(entries, obs) {
    //     console.log(entries[0]);

    //     if (!entries[0].isIntersecting){
    //       return;
    //         }

    // entries[0].target.classList.add('appear');

    //     // そのうえで、 entries[0].target の監視を止めたい場合は、 unobserve というメソッドを使ってあげれば OK です。
    // obs.unobserve(entries[0].target);
    // }

    // const options = {
    //     threshold: 0.2,
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(target);












    // // 監視対象を増やしてみましょう。

    // // まず target ですが、複数の target なので targets とわかりやすく変数名を変えてあげたあとに、 querySelectorAll を使ってあげます。
    // const targets = document.querySelectorAll('img');

    // function callback(entries, obs) {
    //     console.log(entries[0]);

    //     if (!entries[0].isIntersecting){
    //       return;
    //         }

    //      entries[0].target.classList.add('appear');
    //      obs.unobserve(entries[0].target);
    // }

    // const options = {
    //     threshold: 0.2,
    // };
    
    // const observer = new IntersectionObserver(callback, options);
    
    // // あとはこちらの処理ですが、 targets に対して forEach を使ってあげればいいですね。
    // targets.forEach(target => {
    //     observer.observe(target);
    // });














    const targets = document.querySelectorAll('img');

    function callback(entries, obs) {
        console.log(entries);


        entries.forEach(entry => {
            if (!entry.isIntersecting){
              return;
            }
            entry.target.classList.add('appear');
             obs.unobserve(entry.target);
        });
    }

    const options = {
        threshold: 0.2,
    };
    
    const observer = new IntersectionObserver(callback, options);
    

    targets.forEach(target => {
        observer.observe(target);
    });

  
}