⭐️flex-directionとは？
    「どの方向へ並べるか決める」プロパティ。
    ① row（デフォルト）※横並び
    display:flex;＝flex-direction:row;　→横並び
    例；
    .container{
        display:flex;
        flex-direction:row;
    }
    A B C　の並びになる

    ② column　※縦並び
    .container{
        display:flex;
        flex-direction:column;
    }
    A
    B
    C
    の並びになる
▶︎イメージ
    Google
    検索フォーム
    ショートカット
    は上下に並んでいるため「display:flex」「flex-direction:column;」を使用する


⭐️data-tooltipとは？
    ツールチップ（マウスオンしたら出てくる注釈）
    cssで:hoverしたときに文字を表示する仕組みを作成する必要がある
    【仕組み】
        button
        └─ ::after
            └─ data-tooltipの文字

    <button type="button"
        class="search-btn"
        data-tooltip="音声検索">
    </button>

    .search-btn{
        position: relative;
    }
    .search-btn::after{
        content: attr(data-tooltip);　　>>属性の中身を擬似要素へ表示
        position: absolute;
        white-space: nowrap;　>>文字を改行させない
        transition: opacity 0.2s;

//マウスを当てる前は非表示
        opacity: 0;
        visibility: hidden;　　>>要素を非表示
        pointer-events: none;

}

//マウスを当てたら表示
    .search-btn:hover::after{
        opacity: 1;
        visibility: visible;　　>>要素を表示
    }