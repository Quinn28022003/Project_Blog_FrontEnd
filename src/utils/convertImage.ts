import fs from 'fs';

export const ConvertImage = (base64String: string, outputPath: string) => {
    try {
        // Kiểm tra xem chuỗi có tiền tố 'data:image/png;base64,' không
        const hasPrefix = base64String.startsWith('data:image/png;base64,');

        // Nếu không có tiền tố, thêm vào trước khi chuyển đổi
        const correctedBase64 = hasPrefix ? base64String : `data:image/png;base64,${base64String}`;

        // Loại bỏ tiền tố "data:image/png;base64," từ chuỗi base64
        const base64Data = correctedBase64.replace(/^data:image\/\w+;base64,/, '');

        // Tạo Buffer từ chuỗi base64
        const buffer = Buffer.from(base64Data, 'base64');

        // Lưu buffer vào tệp hình ảnh
        fs.writeFileSync(outputPath, buffer);

        console.log(`Hình ảnh đã được chuyển đổi và lưu thành công tại đường dẫn: ${outputPath}`);
    } catch (error) {
        console.error('Lỗi trong quá trình chuyển đổi và lưu hình ảnh:', error);
    };
};
