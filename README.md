# Minimalist Portfolio with React

Thanks for visiting!!
You're probably looking for my portfolio.

### WHat you were working on: (04/22/24)
Making the shop actually work with real products.
There is an error in the deprecated shopping experience. HERE: 
```
      // YOU ARE HERE 04/22/2024
      await stripe.redirectToCheckout({
        sessionId: session.id,
      })
```

#### Notes for Development:
```
# starting redis
$ brew services start redis

# stopping redis
$ brew services stop redis

# checking if it is running
$ redis-cli ping

# clear all
$ redis-cli FLUSHALL

# get keys
redis-CLI KEYS '*'
```
