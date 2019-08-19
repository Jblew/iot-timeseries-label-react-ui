// tslint:disable no-empty-interface
import { AuthState } from "firestore-roles-redux-module";
import React from "react";
import { connect } from "react-redux";

import { State as StoreState } from "../../store/State";
import DrawerLayout from "../layout/DrawerLayout";
import Menu from "../layout/Menu";
import Dashboard from "../views/Dashboard";

import AuthView from "./AuthView";

export interface OwnProps {}
interface StateProps {
    authState: AuthState;
}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps;

interface ComponentState {}

class ViewRouter extends React.Component<Props, ComponentState> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        if (this.props.authState === AuthState.AUTHENTICATED) {
            return this.renderAuthenticated();
        } else {
            return this.renderAuthView();
        }
    }

    private renderAuthenticated() {
        return (
            <DrawerLayout menu={<Menu />}>
                <Dashboard />
            </DrawerLayout>
        );
    }

    private renderAuthView() {
        return <AuthView />;
    }
}

function mapStateToProps(state: StoreState, ownProps: OwnProps): StateProps {
    return {
        authState: state.rolesAuth.state,
    };
}

export default connect<StateProps, DispatchProps, OwnProps, StoreState>(mapStateToProps)(ViewRouter);
