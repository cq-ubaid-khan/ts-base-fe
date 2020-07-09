import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import React, { FunctionComponent, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

interface IFormFooterLink { url: string, text: string }

interface IFormFooterLinksProps { links: IFormFooterLink[] | null }

const FormFooterLinks: FunctionComponent<IFormFooterLinksProps> = (
  { links }: IFormFooterLinksProps,
): ReactElement => (
  <Grid container>
    {
      links && links.map((link: IFormFooterLink, idx: number) => (
        <Grid key={link.url} item xs={idx === 0}>
          <Link component={NavLink} to={link.url} variant="body2">
            {link.text}
          </Link>
        </Grid>
      ))
    }
  </Grid>
);

export default FormFooterLinks;

FormFooterLinks.defaultProps = {
  links: null,
};
