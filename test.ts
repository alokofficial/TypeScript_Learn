function login(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('login success');
        }, 3000);
    });
}

login().then((res: string) => {
    console.log(res);
});
