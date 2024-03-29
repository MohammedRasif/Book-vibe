const getStoredBookApplication = () => {
    const storedBookApplication = localStorage.getItem('book-applications')
    if(storedBookApplication){
        return JSON.parse(storedBookApplication)
    }
    return [];
}

const saveBookApplication = id => {
    const storedBookApplications =getStoredBookApplication();
    const exists = storedBookApplications.find(bookId => bookId === id )
    // console.log(exists)
    if(!exists){
        storedBookApplications.push(id);
        // console.log(storedBookApplications)
        localStorage.setItem('book-applications',JSON.stringify(storedBookApplications))
    }
}

export {getStoredBookApplication,saveBookApplication}