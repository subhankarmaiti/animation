# Width/Height Values Explanation

Animating width and height values will effect layout. These may not always be the most performant however sometimes they are necessary. These are commonly used when you have predefined sizing. They are also typically used for dynamic sizing. With React Native you are able to measure the size of elements asynchronously.

One common animation is an accordion. With dynamic measurement you could measure the height of some content then animate the content from a predefined height to it's actual height. There are many other possibilities but we'll cover those in our more complex examples. This may not be performant on larger blocks of content and is actually a very difficult animation.

Just understand that when you need to adjust the size of a particular element and you want to do it performantly you will need to use size. However because it won't effect layout you may need to use translates to move other elements as well. This is less than ideal but may be necessary to maintain a 60 FPS animation.
