function SideMenu(props) {
  return (
    <aside className={props.mobileOpen ? 'leftSidebar mobile-open' : 'leftSidebar'}>
      <div className='sidebarTop'>
        <button
          type='button'
          className='sideIcon'
          aria-label='Instagram'
          style={{ cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className='iconWrap'>
            <svg className='iconSvg' aria-hidden='true' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z'></path>
            </svg>
          </span>
        </button>
      </div>

      <nav className='sidebarNav'>
        <button type='button' className='sideIcon' aria-label='Inicio'>
          <span className='iconWrap'>
            <svg className='iconSvg' aria-hidden='true' viewBox='0 0 24 24' fill='currentColor'>
              <path d='m21.762 8.786-7-6.68a3.994 3.994 0 0 0-5.524 0l-7 6.681A4.017 4.017 0 0 0 1 11.68V19c0 2.206 1.794 4 4 4h3.005a1 1 0 0 0 1-1v-7.003a2.997 2.997 0 0 1 5.994 0V22a1 1 0 0 0 1 1H19c2.206 0 4-1.794 4-4v-7.32a4.02 4.02 0 0 0-1.238-2.894Z'></path>
            </svg>
          </span>
          <span className='sideIconLabel'>Página inicial</span>
        </button>

        <button type='button' className='sideIcon' aria-label='Reels'>
          <span className='iconWrap'>
            <svg className='iconSvg' aria-hidden='true' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M22.935 7.468c-.063-1.36-.307-2.142-.512-2.67a5.341 5.341 0 0 0-1.27-1.95 5.345 5.345 0 0 0-1.95-1.27c-.53-.206-1.311-.45-2.672-.513C15.333 1.012 14.976 1 12 1s-3.333.012-4.532.065c-1.36.063-2.142.307-2.67.512-.77.298-1.371.69-1.95 1.27a5.36 5.36 0 0 0-1.27 1.95c-.206.53-.45 1.311-.513 2.672C1.012 8.667 1 9.024 1 12s.012 3.333.065 4.532c.063 1.36.307 2.142.512 2.67.297.77.69 1.372 1.27 1.95.58.581 1.181.974 1.95 1.27.53.206 1.311.45 2.672.513C8.667 22.988 9.024 23 12 23s3.333-.012 4.532-.065c1.36-.063 2.142-.307 2.67-.512a5.33 5.33 0 0 0 1.95-1.27 5.356 5.356 0 0 0 1.27-1.95c.206-.53.45-1.311.513-2.672.053-1.198.065-1.555.065-4.531s-.012-3.333-.065-4.532Zm-1.998 8.972c-.05 1.07-.228 1.652-.38 2.04-.197.51-.434.874-.82 1.258a3.362 3.362 0 0 1-1.258.82c-.387.151-.97.33-2.038.379-1.162.052-1.51.063-4.441.063s-3.28-.01-4.44-.063c-1.07-.05-1.652-.228-2.04-.38a3.354 3.354 0 0 1-1.258-.82 3.362 3.362 0 0 1-.82-1.258c-.151-.387-.33-.97-.379-2.038C3.011 15.28 3 14.931 3 12s.01-3.28.063-4.44c.05-1.07.228-1.652.38-2.04.197-.51.434-.875.82-1.26a3.372 3.372 0 0 1 1.258-.819c.387-.15.97-.329 2.038-.378C8.72 3.011 9.069 3 12 3s3.28.01 4.44.063c1.07.05 1.652.228 2.04.38.51.197.874.433 1.258.82.385.382.622.747.82 1.258.151.387.33.97.379 2.038C20.989 8.72 21 9.069 21 12s-.01 3.28-.063 4.44Zm-4.584-6.828-5.25-3a2.725 2.725 0 0 0-2.745.01A2.722 2.722 0 0 0 6.988 9v6c0 .992.512 1.88 1.37 2.379.432.25.906.376 1.38.376.468 0 .937-.123 1.365-.367l5.25-3c.868-.496 1.385-1.389 1.385-2.388s-.517-1.892-1.385-2.388Zm-.993 3.04-5.25 3a.74.74 0 0 1-.748-.003.74.74 0 0 1-.374-.649V9a.74.74 0 0 1 .374-.65.737.737 0 0 1 .748-.002l5.25 3c.341.196.378.521.378.652s-.037.456-.378.651Z'></path>
            </svg>
          </span>
          <span className='sideIconLabel'>Reels</span>
        </button>

        <button type='button' className='sideIcon' aria-label='Mensagens'>
          <span className='iconWrap'>
            <svg className='iconSvg' aria-hidden='true' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z' fill='none' stroke='currentColor' strokeLinejoin='round' strokeWidth='2'></path>
              <line fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' x1='7.488' x2='15.515' y1='12.208' y2='7.641'></line>
            </svg>
            <span className='iconBadge'>3</span>
          </span>
          <span className='sideIconLabel'>Mensagens</span>
        </button>

        <button type='button' className='sideIcon' aria-label='Pesquisa'>
          <span className='iconWrap'>
            <svg className='iconSvg' aria-hidden='true' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'></path>
              <line fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' x1='16.511' x2='22' y1='16.511' y2='22'></line>
            </svg>
          </span>
          <span className='sideIconLabel'>Pesquisa</span>
        </button>

        <button type='button' className='sideIcon' aria-label='Explorar'>
          <span className='iconWrap'>
            <svg className='iconSvg' aria-hidden='true' fill='currentColor' viewBox='0 0 48 48'>
              <g id='Layer_2' data-name='Layer 2'>
                <g id='invisible_box' data-name='invisible box'>
                  <rect width='48' height='48' fill='none'/>
                </g>
                <g id='icons_Q2' data-name='icons Q2'>
                  <path d='M24,6A18,18,0,1,1,6,24,18.1,18.1,0,0,1,24,6m0-4A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2Z'/>
                  <path d='M33.3,13.3,20,20,13.3,33.3a1.1,1.1,0,0,0,1.4,1.4L28,28l6.7-13.3A1.1,1.1,0,0,0,33.3,13.3ZM24,26a2,2,0,1,1,2-2A2,2,0,0,1,24,26Z'/>
                </g>
              </g>
            </svg>
          </span>
          <span className='sideIconLabel'>Explorar</span>
        </button>

        <button type='button' className='sideIcon' aria-label='Notificacoes'>
          <span className='iconWrap'>
            <span className='iconGlyph'>♡</span>
          </span>
          <span className='sideIconLabel'>Notificações</span>
        </button>

        <button
          type='button'
          className='sideIcon'
          aria-label='Criar'
          style={{ cursor: 'pointer' }}
          onClick={props.onCriar}
        >
          <span className='iconWrap'>
            <span className='iconGlyph'>+</span>
          </span>
          <span className='sideIconLabel'>Criar</span>
        </button>

        <button type='button' className='sideIcon' aria-label='Perfil'>
          <span className='iconWrap'>
            <span className='iconGlyph'>◉</span>
          </span>
          <span className='sideIconLabel'>Perfil</span>
        </button>
      </nav>

      <div className='sidebarBottom'>
        <button type='button' className='sideIcon' aria-label='Mais'>
          <span className='iconWrap'>
            <span className='iconGlyph'>☰</span>
          </span>
          <span className='sideIconLabel'>Mais</span>
        </button>
        <button type='button' className='sideIcon' aria-label='Meta'>
          <span className='iconWrap'>
            <span className='iconGlyph'>◫</span>
          </span>
          <span className='sideIconLabel'>Também da Meta</span>
        </button>
      </div>
    </aside>
  );
}

export default SideMenu;
