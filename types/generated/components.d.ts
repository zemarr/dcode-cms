import type { Schema, Attribute } from '@strapi/strapi';

export interface PageComponentsHome extends Schema.Component {
  collectionName: 'components_page_components_homes';
  info: {
    displayName: 'Home';
    icon: 'house';
    description: '';
  };
  attributes: {
    intro: Attribute.String;
    title: Attribute.Text;
    subtitle: Attribute.Text;
    typedText: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface PageComponentsNavComponent extends Schema.Component {
  collectionName: 'components_page_components_nav_components';
  info: {
    displayName: 'NavComponent';
    icon: 'dashboard';
  };
  attributes: {
    title: Attribute.String;
    href: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page-components.home': PageComponentsHome;
      'page-components.nav-component': PageComponentsNavComponent;
    }
  }
}
