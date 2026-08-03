flex-directionとは？
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
