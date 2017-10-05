import React, { Component } from 'react';



  export const  HeaderItem = React.createClass({

            render: function () { 
                return ( 
                        <div className="box box-primary">
                            <h3 className="box-title">
                                <label id={this.props.Name} data-lang={this.props.Name}>{this.props.HeaderText} </label>
                            </h3>
                        </div> 
                )
            }
        }); 