## Profiling JavaScript instantiation patterns

### The four patterns

JavaScript has 4 different object instantiation patterns. Instead of having classes, JavaScript implements functional classes (constructor functions) to generate multiple objects with similar properties and methods.

Each functional constructor performs the four basic operations:

- creates an object
- assigns the object properties
- adds methods to the object
- returns the object

Here is a basic description of each style:

**Functional**: 

- A simple "maker" pattern.
- Does not use `new`, `this`, or prototype chains.
- Generate, assign properties, and define methods all within one function.
- There are no methods delegated to fallback object.

**Functional Shared**: 

- A simple "maker" pattern with shared methods.
- Does not use `new` or prototype chains.
- Use extend() to programmatically store all functions we plan to add on methods.

**Prototypal**:

- Uses `Object.create`.
- Does not use `new`.

**Psuedoclassical**:

- Creates instances with the keyword `new`.
- Does not declare or return the instance explicitly.

### Stacks and Queues

For this exercise I'm implementing stacks and queues in each instantiation pattern. I'm using [Chrome profiling tools](https://developers.google.com/web/tools/chrome-devtools/#profiles-panel-profile-execution-time-and-memory-usage) to compare the performance of each pattern. There are three interesting things you can take a look at. 

### The CPU Profiler

The first is using the CPU profiler to investigate the run-time of your functions. You can access it by starting up a profile snapshot and reloading a page to capture it. 

Results from CPU profiler:

Analysis:

Functional copies all of the methods over every single time. One drawback of this instance is the creation of new methods for every instance. Our function only instantiation pattern is really easy to read and explain but its comparative performance isn't great. We shouldn't discredit code clarity-- if you aren't creating thousands of instances of your object then the performance gains in favor of code readability are negligible. Another advantage to this pattern is not having to use the `this` keyword, which can confuse beginners or folks who aren't familiar with `this` keyword.

Functional-shared uses extend to copy the method references over instead of the methods.

Function sharing via prototype delegation make it possible for multiple child objects to all reflect the properties of one parent object.

Psuedoclassical is syntactic sugar for prototype delegation. A potential downside to the psuedoclassical pattern is the additional complexity under the hood in exchange for clear and concise code. However, it's been in use since 1995, many JS projects and frameworks use this pattern, and as a result there are JS interpreters out there that have worked to write performance enhancements targeted specifically to this pattern. If you're writing a library that may be instantiated thousands of times this is probably the best way to go.

### The Heap Snapshot

The second thing you can look at that's interesting is the heap snapshot to investigate object allocation and memory use. 

Results from Heap Snapshot:

Analysis:

### The Heap Profiler

A third thing of interest is running the heap profiler to look at garbage collection behavior across instantiations.

Results from Heap Profiler:

Analysis:

### Conclusion

In most cases where you aren't instantiating your objects thousands, millions, or billions or times, you won't be able to take advantage of the speed improvements of one particular instantiation pattern. Because of this it's probably best to just go with the pattern that is simplest and easiest to read and understand. It's probably best to go with the pattern that is consistent with the code base and code style you are working with.

### Resources and Additional Reading

- http://www.ryanatkinson.io/javascript-instantiation-patterns/







