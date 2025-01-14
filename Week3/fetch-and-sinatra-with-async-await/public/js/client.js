const postBookFetch = async () => {
    try {
      const data = {
        book: {
          title: "book from fetch"
        }
      }
      const jsonStringData = JSON.stringify(data)
      const response = await fetch("/api/v1/books", {
        method: "post",
        body: jsonStringData,
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const responseBody = await response.json()
      console.log("responseBody:", responseBody)
      return responseBody
    } catch(err) {
      console.error("Error in fetch!")
      console.error(err)
    }
  }
  
  postBookFetch()