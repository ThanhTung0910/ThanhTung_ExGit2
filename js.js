document.addEventListener("DOMContentLoaded", function() {
    const screen = document.getElementById("screen-display");
    const buttons = document.querySelectorAll(".keyboard button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (value === "CALC") {
                screen.value = ""; // xóa màn hình
            } else if (value === "=") {
                try {
                    screen.value = eval(screen.value); // tính toán
                } catch (error) {
                    screen.value = "Error"; // nếu biểu thức sai
                }
            } else {
                screen.value += value; // thêm ký tự vào màn hình
            }
        });
    });
});
