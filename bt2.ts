// Khai báo một mảng số nguyên
let numbers: number[] = [1, 2, 3, 4, 5];

// Mảng có thể thêm hoặc loại bỏ phần tử và thay đổi kích thước
numbers.push(6);
numbers.pop(); // Loại bỏ phần tử cuối cùng
numbers[0] = 10; // Gán giá trị mới cho phần tử đầu tiên
console.log(numbers); // Output: [10, 2, 3, 4, 5]

// Khai báo một tuple đại diện cho thông tin sinh viên: tên (string) và điểm (number)
let student: [string, number] = ["Alice", 90];

// Tuple có kích thước cố định và không thể thêm hoặc loại bỏ phần tử
// student.push("Bob"); // Lỗi: Không thể thêm phần tử mới vào tuple
// student.pop(); // Lỗi: Không thể loại bỏ phần tử khỏi tuple

// Các phần tử trong tuple có thể truy cập bằng chỉ số hoặc thông qua việc gán tên cho mỗi phần tử
let name1: string = student[0];
let grade: number = student[1];
console.log(name, grade); // Output: Alice 90

// Tuple có thể biểu diễn các loại dữ liệu khác nhau trong một cấu trúc cố định
let point: [number, number, string] = [10, 20, "A"]; // Tuple đại diện cho tọa độ và nhãn của một điểm
