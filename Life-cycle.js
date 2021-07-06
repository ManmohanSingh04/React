// #LifeCycle of component
// Components are created (mounted on the DOM), grow by updating, and then die (unmount on DOM). This is referred to as a component lifecycle.

// =========#Lifecycle Methods
// 1. initialization.
// 2. mounting.
// 3. updating, and
// 4. unmounting.

// NOTE:- Mounting, updating and unmounting are the 3 phase of life-cycle.

// 1. initialization
// This is the phase in which the component is going to start its journey by setting up the state and the props. This is usually done inside the constructor method.

// 2. mounting.
//Mounting is the phase in which our React component mounts on the DOM(i.e., is created and inserted into the DOM).In this phase, our component renders the first time.

// Method of mounting
// 2.1:- componentDidMount().
// 2.2:- componentWillMount().

// 3. Updating
// After the mounting phase the update phase comes into the scene. In this phase, the data of the component (state & props) updates in response to user events like clicking, typing and so on. This results in the re-rendering of the component. Example:- user add product into add to cart, increase the rating etc.

// Methods of update
// 3.1:- shouldComponentUpdate().
// 3.2:- componentWillUpdate().
// 3.3:- ComponentDidUpdate().


// 4. unmounting.
// In this last phase, the component is not needed and get unmounted from the browser DOM. Example:- if we move far from the page which we seen last time then in that case page get unmoundet or die.

// Method of unmounting
//  4.1:- componentWillUnmount()

// 1:06/00




