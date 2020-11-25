import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Typography } from '@material-ui/core';
import { ReactComponent as DisqueCamaraIcon }from './../../assets/0800_icon.svg';
import { ReactComponent as EnquetesIcon} from './../../assets/enquetes_icon.svg';
import { ReactComponent as FaleConoscoIcon} from './../../assets/fale_conosco_icon.svg';
import { ReactComponent as NoticiasIcon} from './../../assets/noticias_icon.svg';
import { ReactComponent as PautaIcon} from './../../assets/pauta_icon.svg';
import { ReactComponent as WikilegisIcon} from './../../assets/wikilegis_icon.svg';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#FFF'
  },
}));

export default function MenuItens() {
  const classes = useStyles()
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon style={{ color: 'white' }} />
        </ListItemIcon>
        <ListItemText classes={{ root: classes.root }}
                      primary={<Typography>Visão Geral</Typography>} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DisqueCamaraIcon />
        </ListItemIcon>
        <ListItemText classes={{ root: classes.root }}
                      primary={<Typography>0800 Câmara</Typography>} />
        </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText classes={{ root: classes.root }}
                      primary={<Typography>Audiências Interativas</Typography>} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <EnquetesIcon />
        </ListItemIcon>
        <ListItemText classes={{ root: classes.root }}
                      primary={<Typography>Enquetes</Typography>} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FaleConoscoIcon />
        </ListItemIcon>
        <ListItemText classes={{ root: classes.root }}
                      primary={<Typography>Fale Conosco</Typography>} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <NoticiasIcon />
        </ListItemIcon>
        <ListItemText classes={{ root: classes.root }}
                      primary={<Typography>Notícias</Typography>} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PautaIcon />
        </ListItemIcon>
        <ListItemText classes={{ root: classes.root }}
                      primary={<Typography>Pauta Participativa</Typography>} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <WikilegisIcon />
        </ListItemIcon>
        <ListItemText classes={{ root: classes.root }}
                      primary={<Typography>Wikilegis 2.0</Typography>} />
      </ListItem>
    </List>
  )
}
