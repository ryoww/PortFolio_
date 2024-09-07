from PIL import Image

def convert_transparent_to_color(input_image_path, output_image_path_white, output_image_path_black):
    # 画像を開く（RGBA形式）
    img = Image.open(input_image_path).convert("RGBA")
    
    # ピクセルデータを取得
    datas = img.getdata()
    
    # 白と黒のデータを生成
    white_data = []
    black_data = []
    
    for item in datas:
        # 透過されているピクセル（アルファ値が0）をチェック
        if item[3] == 0:  # 完全に透過されている場合
            # 透過部分はそのまま透過させる
            white_data.append((255, 255, 255, 0))  # 透明な白
            black_data.append((0, 0, 0, 0))  # 透明な黒
        else:
            # 透過されていない部分をそれぞれ白か黒で塗りつぶす
            white_data.append((255, 255, 255, 255))  # 不透明な白
            black_data.append((0, 0, 0, 255))  # 不透明な黒
    
    # 新しい画像を作成して、データを設定
    white_img = Image.new("RGBA", img.size)
    black_img = Image.new("RGBA", img.size)
    
    white_img.putdata(white_data)
    black_img.putdata(black_data)
    
    # 画像を保存
    white_img.save(output_image_path_white, "PNG")
    black_img.save(output_image_path_black, "PNG")

# 使用例
input_image_path = "qiita.png"  # 入力する透過PNG画像ファイルのパス
output_image_path_white = "qiita_white.png"  # 出力する白色画像のパス
output_image_path_black = "qiita_black.png"  # 出力する黒色画像のパス

# 透過されていない部分を白と黒に変換
convert_transparent_to_color(input_image_path, output_image_path_white, output_image_path_black)
