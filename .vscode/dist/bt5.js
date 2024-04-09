"use strict";
let variableAny = 10;
let variableUnknown = 10;
// Gán giá trị mới cho biến
variableAny = 'Hello'; // OK
variableUnknown = 'Hello'; // OK
// Truy cập thuộc tính của biến
let lengthAny = variableAny.length; // Không báo lỗi vì kiểu dữ liệu any cho phép truy cập bất kỳ thuộc tính nào
let lengthUnknown = variableUnknown.length; // Báo lỗi: Property 'length' does not exist on type 'unknown'
// Ép kiểu
let value1 = variableAny; // OK vì kiểu dữ liệu any cho phép ép kiểu mà không cần kiểm tra
let value2 = variableUnknown; // Báo lỗi: Type 'unknown' is not assignable to type 'string'. 
// Kiểm tra kiểu dữ liệu
if (typeof variableAny === 'string') {
    console.log('variableAny là kiểu string');
}
if (typeof variableUnknown === 'string') {
    console.log('variableUnknown là kiểu string'); // Mã này không thể biên dịch thành công vì TypeScript không thể chắc chắn kiểu dữ liệu của variableUnknown
}
