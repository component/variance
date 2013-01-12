
# variance

  variance utility

## Installation

    $ component install component/variance

## API

### variance(array)

  Return the variance of `array`:

```js
variance([1,5,6,1,2,0])
```

### variance(array, fn)

  variance of `array` with callback `fn(val, i)`:

```js
var age = variance(users, function(u){ return u.age })
```

### variance(array, string)

  variance of `array` with the given property `string`:

```js
var age = variance(users, 'age')
```

# License

  MIT
