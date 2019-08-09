 import React from 'react'
 import {Header, Input, Segment, Icon} from 'semantic-ui-react'

 class MessagesHeader extends React.Component{
     render(){

        const {channelName, handleSearchChange, searchLoading} = this.props;

         return(
            <Segment clearing>
                <Header fluid="true" as="h2" floated="left" style={{marginBottom: 0}} >
                <span>
                    {channelName} <Icon name={"star outline"} color="black" />        
                </span>
                <Header.Subheader>2 Users</Header.Subheader>
                </Header>
                <Header floated="right">
                    <Input
                        loading = {searchLoading}
                        size="mini"
                        icon="search"
                        name="searhTerm"
                        placeholder="Search Message"
                        onChange={handleSearchChange}
                    />
                </Header>
            </Segment>
         );
     }
 }

 export default MessagesHeader;