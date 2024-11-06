### The useEffect hook in React is essential for managing side effects in function components. Side effects can include things like fetching data from an API, setting up a subscription, or manually changing the DOM, which React doesn't do automatically as part of the component rendering.

## 1. Basic Syntax of useEffect hook

JavaScript

```
useEffect(()=> {
    // side effect login here

    return ()=> {
        // cleanup logic here(if necessary)
    }
}, [dependencies])
```

Parameters:

- Effect Function(()=> {}): This function is called after the component renders. It can contain the side effect login, like API calls or setting up listeners.
- Dependency Array([dependencies]): An array of dependencies that controls when the effect should re-run. React compares these dependencies on each render. If they've changed, the effect re-runs.
  - Empty Array([]): The effect runs only once after the initial render.
  - No Array(undefined): The effect runs after every render.

Cleanup Function
The cleanup function is returned by the effect function, and React calls before re-running the effect on updates or unmounting the component.

## 2. When and How to Use useEffect

- a. Fetching Data(API Calls)
  To fetch data after a component mounts, we can use useEffect with an empty dependency array ([]). This ensures tha API call only happens once.
  JavaScript

```
import {useEffect, useState} from "react";
function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response)=> response.json())
            .then((data)=> setUsers(data))
            .catch((error)=> console.log("Error while fetching data), error)
    },[])

    return(
        <ul>
            {users.map((user)=> <li key={user.id}>{user.name}</li>)}
        </ul>
    )
}
```

- b. Listening for Window Events
  useEffect is useful for adding event listeners, like listening to window resize events. Here we will also need cleanup function to remove the lisener to prevent memory leaks.

JavaScript

```
import {useEffect, useState} from "react";

function WindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(()=> {
        const handleResize =()=> setWidth(window.innerWidth);
        window.addEventListenere('rezise', handleResize);

        // cleanup listener on unmount
        return ()=> {
            window.removeEventListener('resize', handleResize)
        }
    }, []) // Only run once on mount
}
```
