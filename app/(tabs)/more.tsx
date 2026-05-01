import * as React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SceneMap, SceneRendererProps, TabBar, TabView } from 'react-native-tab-view';

// ---------- Tab Screens ----------
const HomeRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]}>
    <Text style={styles.text}>Home Tab</Text>
  </View>
);

const SettingsRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
    <Text style={styles.text}>Settings Tab</Text>
  </View>
);

const ProfileRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#4caf50' }]}>
    <Text style={styles.text}>Profile Tab</Text>
  </View>
);

// ---------- Types ----------
type TabRoute = {
  key: string;
  title: string;
};

const renderScene = SceneMap({
  home: HomeRoute,
  settings: SettingsRoute,
  profile: ProfileRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState<number>(0);

  const [routes] = React.useState<TabRoute[]>([
    { key: 'home', title: 'Home' },
    { key: 'settings', title: 'Settings' },
    { key: 'profile', title: 'Profile' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props: SceneRendererProps & { navigationState: any }) => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'white' }}
          style={{ backgroundColor: 'black' }}
        />
      )}
    />
  );
}

// ---------- Styles ----------
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
