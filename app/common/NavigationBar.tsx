import React from 'react';
import { View, StyleSheet } from 'react-native';
import { withNavigation, NavigationScreenProp } from 'react-navigation';
import HamburgerMenuSvg from 'app/resources/svg/hamburger';
import LeftArrowIcon from 'app/resources/svg/left-arrow';
import RefreshSvg from 'app/resources/svg/refresh';
import CloseSvg from 'app/resources/svg/close';
import { Colors } from 'app/constants';
import { SemiBoldText, SeparatorLine, NavigationMenuButton } from 'app/common';
import KebabSvg from 'app/resources/svg/kebab';

interface Props {
  navigation: NavigationScreenProp<any, any>;
  navigationTitle?: string;
  centerTitle?: boolean;
  showBackButton?: boolean;
  showCloseButton?: boolean;
  showRefreshButton?: boolean;
  showKebabButton?: boolean;
  onRefreshButtonPress?: () => void;
  onBackButtonPress?: () => void;
  onLeftButtonPress?: () => void;
  onRightButtonPress?: () => void;
  customTitleElement?: React.ReactNode;
  customLeftButtonElement?: React.ReactNode;
  customRightButtonElement?: React.ReactNode;
  hideBottomBorder?: boolean;
  grey?: boolean;
}

const NavigationBar: React.FC<Props> = (props: Props) => {
  const {
    navigationTitle,
    customTitleElement,
    customLeftButtonElement,
    customRightButtonElement,
    centerTitle,
    showBackButton,
    showCloseButton,
    showRefreshButton,
    showKebabButton,
    onLeftButtonPress,
    onBackButtonPress,
    onRefreshButtonPress,
    onRightButtonPress,
    hideBottomBorder,
    grey,
  } = props;

  // class NavigationBar extends React.Component {
  const onCloseButtonPress = () => {
    if (props.navigation) {
      props.navigation.pop();
    }
  };

  const handleOnBackButtonPress = () => {
    if (props.navigation) {
      props.navigation.goBack();
    }
  };

  const onDrawerButtonPress = () => {
    if (props.navigation) {
      // props.navigation.openDrawer();
    }
  };

  const renderTitle = () => {
    // Custom title
    if (customTitleElement) {
      return (
        <View
          style={[
            style.navigationTitle,
            centerTitle ? { alignItems: 'center' } : undefined,
          ]}
        >
          {customTitleElement}
        </View>
      );
    }
    // Default title
    return (
      <SemiBoldText
        style={[
          style.navigationTitle,
          centerTitle ? { textAlign: 'center' } : undefined,
        ]}
        fontSize={16}
        text={navigationTitle}
        textAlign="center"
      />
    );
  };

  const renderLeftButton = () => {
    // Custom left button
    if (customLeftButtonElement) {
      return (
        <NavigationMenuButton
          style={style.leftMenuButton}
          handleMenuButtonPress={onLeftButtonPress}
          buttonImageElement={customLeftButtonElement}
        />
      );
    }
    // Back button
    if (showBackButton) {
      return (
        <NavigationMenuButton
          style={style.leftMenuButton}
          handleMenuButtonPress={onBackButtonPress || handleOnBackButtonPress}
          buttonImageElement={<LeftArrowIcon />}
        />
      );
    }
    // Close button
    if (showCloseButton) {
      return (
        <NavigationMenuButton
          style={style.leftMenuButton}
          handleMenuButtonPress={onLeftButtonPress || onCloseButtonPress}
          buttonImageElement={<CloseSvg />}
        />
      );
    }
    // Drawer button (by default)
    return (
      <NavigationMenuButton
        style={style.leftMenuButton}
        handleMenuButtonPress={onLeftButtonPress || onDrawerButtonPress}
        buttonImageElement={<HamburgerMenuSvg />}
      />
    );
  };

  const renderRightButton = () => {
    // Custom right button
    if (customRightButtonElement) {
      return (
        <NavigationMenuButton
          style={style.rightMenuButton}
          handleMenuButtonPress={onRightButtonPress}
          buttonImageElement={customRightButtonElement}
        />
      );
    }

    // Kebab button
    if (showKebabButton) {
      return (
        <NavigationMenuButton
          style={style.rightMenuButton}
          handleMenuButtonPress={onRefreshButtonPress}
          buttonImageElement={<KebabSvg />}
        />
      );
    }

    // Refresh button
    if (showRefreshButton) {
      return (
        <NavigationMenuButton
          style={style.rightMenuButton}
          handleMenuButtonPress={onRefreshButtonPress}
          buttonImageElement={<RefreshSvg />}
        />
      );
    }
    // Empty view (for padding purposes)
    return <View style={style.rightMenuButton} />;
  };

  return (
    <View
      style={[
        style.container,
        grey
          ? { backgroundColor: Colors.greyLight }
          : { backgroundColor: Colors.white },
      ]}
    >
      <View style={style.innerContainer}>
        {/* Left button */}
        {renderLeftButton()}

        {/* Title */}
        {renderTitle()}

        {/* Filler view, to stretch between left and right button */}
        <View style={style.fillerView} />

        {/* Right button */}
        {renderRightButton()}
      </View>

      {/* Border */}
      {!hideBottomBorder ? <SeparatorLine /> : null}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: Colors.white,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  fillerView: {
    flex: 1,
  },
  leftMenuButton: {
    height: 56,
    paddingLeft: 16,
    paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightMenuButton: {
    height: 56,
    paddingLeft: 8,
    paddingRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationTitle: {
    position: 'absolute',
    flex: 1,
    left: 0,
    right: 0,
    color: Colors.black,
    paddingTop: 4,
    marginLeft: 50,
    marginRight: 50,
    alignSelf: 'center',
  },
});

export default withNavigation(NavigationBar);
