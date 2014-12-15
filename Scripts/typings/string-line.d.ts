declare class StringLine {
    // 残っている画像アドレス変換前の文字列行
    lineBefore: string;
    // 画像アドレス変換後の文字列行
    lineAfter: string = '';
    // 画像アドレス変換前の画像タグ
    imageTagBefore: string;
    // 画像アドレス変換前の画像アドレス
    imageAddressBefore: string;
}