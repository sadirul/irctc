const Helper = () => {
    const requestURL = 'https://rails-cbe.goibibo.com/v1/irctc';

    // const checkFileExists = async (filePath) => {
    //   try {
    //     const fileExists = await RNFS.exists(filePath);
    //     return fileExists;
    //   } catch (error) {
    //     console.log(error);
    //     return false;
    //   }
    // };

    return {
        requestURL,
    }
}

export default Helper
