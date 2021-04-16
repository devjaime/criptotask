import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { InfoOutlined } from '@material-ui/icons'
import {
  TableHead,
  TableRow,
  TableCell,
  Typography,
  Tooltip,
  Grid,
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  tableCell: {
    borderBottom: '1px solid #00d665',
    '&:hover': {
      background: '#fffcd6',
      cursor: 'pointer',
    },
  },
  text: {
    fontWeight: theme.typography.fontWeightBold,
  },
  tooltipContainer: {
    paddingLeft: 8,
    width: 16,
    height: 16,
  },
  tooltip: {
    width: 16,
    height: 16,
  },
}))

export const Head: React.FC = () => {
  const classes = useStyles()

  return (
    <TableHead>
      <TableRow>
        <TableCell className={classes.tableCell} align="center">
          <Typography
            className={classes.text}
            variant="subtitle2"
            component="span"
          >
            #
          </Typography>
        </TableCell>
        <TableCell className={classes.tableCell} align="center">
          <Typography
            className={classes.text}
            variant="subtitle2"
            component="span"
          >
            Criptomoneda
          </Typography>
        </TableCell>
        <TableCell className={classes.tableCell} align="center">
          <Typography
            className={classes.text}
            variant="subtitle2"
            component="span"
          >
            Precio CLP
          </Typography>
        </TableCell>
        <TableCell className={classes.tableCell} align="right">
          <Grid
            container
            wrap="nowrap"
            justify="center"
            alignItems="center"
            alignContent="center"
          >
            <Grid item>
              <Typography
                className={classes.text}
                variant="subtitle2"
                component="span"
              >
                Volumen Total
              </Typography>
            </Grid>
            <Grid className={classes.tooltipContainer} item container>
              <Tooltip
                className={classes.tooltip}
                title={
                  <Typography variant="caption">
                    Este es el volumen total de la moneda en todos los mercados y
                     pares de divisas multiplicados por el precio actual.
                  </Typography>
                }
              >
                <InfoOutlined />
              </Tooltip>
            </Grid>
          </Grid>
        </TableCell>
        <TableCell className={classes.tableCell} align="right">
          <Grid
            container
            wrap="nowrap"
            justify="center"
            alignItems="center"
            alignContent="center"
          >
            <Grid item>
              <Typography
                className={classes.text}
                variant="subtitle2"
                component="span"
              >
                Top total volumen
              </Typography>
            </Grid>
            <Grid className={classes.tooltipContainer} item container>
              <Tooltip
                className={classes.tooltip}
                title={
                  <Typography variant="caption">
                    Las 10 monedas principales se clasifican según el Volumen total superior de 24 horas. Esto
                     es el volumen total de la moneda en todos los intercambios de primer nivel
                     mercados y pares de divisas multiplicados por el precio actual.
                  </Typography>
                }
              >
                <InfoOutlined />
              </Tooltip>
            </Grid>
          </Grid>
        </TableCell>
        <TableCell className={classes.tableCell} align="right">
          <Grid
            container
            wrap="nowrap"
            justify="center"
            alignItems="center"
            alignContent="center"
          >
            <Grid item>
              <Typography
                className={classes.text}
                variant="subtitle2"
                component="span"
              >
                Capitalización.
              </Typography>
            </Grid>
            <Grid className={classes.tooltipContainer} item container>
              <Tooltip
                className={classes.tooltip}
                title={
                  <Typography variant="caption">
                      Al calcular la capitalización de mercado (capitalización de mercado),
                     contabilizar todas las monedas en circulación, incluidas las
                     por los miembros del equipo o la empresa. Esto también incluye monedas en
                     contratos inteligentes o fideicomiso. Si las monedas han sido emitidas y
                     no se han quemado, se contabilizarán en el
                     Tapa del mercado.
                  </Typography>
                }
              >
                <InfoOutlined />
              </Tooltip>
            </Grid>
          </Grid>
        </TableCell>
        <TableCell className={classes.tableCell} align="center">
          <Grid
            container
            justify="center"
            alignItems="center"
            alignContent="center"
          >
            <Tooltip
              className={classes.tooltip}
              title={
                <Typography variant="caption">
                  Estas calificaciones están impulsadas por Weiss Crypto Ratings.
                </Typography>
              }
            >
              <InfoOutlined />
            </Tooltip>
          </Grid>
        </TableCell>
        <TableCell className={classes.tableCell} align="center">
          <Typography
            className={classes.text}
            variant="subtitle2"
            component="span"
          >
            Cambio. 24H
          </Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  )
}
