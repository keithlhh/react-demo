import styled from 'styled-components';
import { Tabs as AntTabs } from 'antd';

const Tabs = styled(AntTabs)`
&.ant-tabs{
    background: #efefef;
    .ant-tabs-nav{
        margin-bottom:0px;
        .ant-tabs-nav-list{
            margin-left:20px
        }
        &::before{
            z-index:1;
            left: 20px;
        }
    }
    .ant-tabs-tab{
        padding-top:0px;
    }
    .ant-tabs-nav-wrap,.ant-tabs-content-holder{
        background: #ffffff;
    }
}`;

export default Tabs;