import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'

const SearchStackNavigator = StackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
})

/*
const FavoritesStackNavigator = StackNavigator({
  Search: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris'
    }
  }
})
*/

const MoviesTabNavigator = TabNavigator(
  {
    Search: {
      screen: SearchStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_search.png')}
            style={styles.icon}/>
        }
      }
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_favorite.png')}
            style={styles.icon}/>
        }
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeBackgroundColor: '#DDDDDD',
      inactiveBackgroundColor: '#FFFFFF',
    }
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default MoviesTabNavigator
