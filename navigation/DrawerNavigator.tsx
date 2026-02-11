// navigation/DrawerNavigator.tsx
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import React from "react";

export default function DrawerNavigator() {
  return (
    <Drawer>
      <Drawer.Screen
        name="/(root)/home" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Home',
          title: 'overview',
        }}
      />
      
    </Drawer>
  );
}
