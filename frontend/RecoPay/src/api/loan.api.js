export const applyLoan = async (data) => {
    const res = await fetch("http://localhost:3000/api/loans", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return res.json();
};