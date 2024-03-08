// Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy action plus a simpler variant of the same task. Or, as we’ll see soon, to deal with certain data structures.

// When a function solves a task, in the process it can call many other functions. A partial case of this is when a function calls itself. That’s called recursion.


//Recursive thinking: simplify the task and call self:
function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  alert( pow(2, 3) ); // 8

  //To do a nested call, JavaScript remembers the current execution context in the execution context stack.

// Here we call the same function pow, but it absolutely doesn’t matter. The process is the same for all functions:

// The current context is “remembered” on top of the stack.
// The new context is created for the subcall.
// When the subcall is finished – the previous context is popped from the stack, and its execution continues.


// Any recursion can be rewritten as a loop. The loop variant usually can be made more effective.

// …But sometimes the rewrite is non-trivial, especially when a function uses different recursive subcalls depending on conditions and merges their results or when the branching is more intricate. And the optimization may be unneeded and totally not worth the efforts.

// Recursion can give a shorter code, easier to understand and support. Optimizations are not required in every place, mostly we need a good code, that’s why it’s used.




// Recursive traversals
// The 1st case is the base of recursion, the trivial case, when we get an array.

// The 2nd case when we get an object is the recursive step. A complex task is split into subtasks for smaller departments. They may in turn split again, but sooner or later the split will finish at (1).

// The algorithm is probably even easier to read from the code:
let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

alert(sumSalaries(company)); // 7700

//We can easily see the principle: for an object {...} subcalls are made, while arrays [...] are the “leaves” of the recursion tree, they give immediate result.
